import streamlit as st
import pandas as pd
import together

# Set Together AI API Key
TOGETHER_API_KEY = "7d2457d4783966cb1a1afdb286c9a5ba957a3014d7a22d1e1c5ae3f214f83de6"
together.api_key = TOGETHER_API_KEY

# Streamlit UI
st.title("🎯 AI-Powered Personalized Recommendations")

# File Upload
uploaded_file = st.file_uploader("Upload Customer Data (Excel)", type=["xlsx"])

if uploaded_file:
    xls = pd.ExcelFile(uploaded_file)
    
    # Load different sheets
    customer_data = pd.read_excel(xls, sheet_name="Customer Profile (Individual)")
    sentiment_data = pd.read_excel(xls, sheet_name="Social Media Sentiment")
    txn_data = pd.read_excel(xls, sheet_name="Transaction History")

    # Display data

    st.subheader("Customer Profile (Individual)")
    st.write(customer_data.head())

    st.subheader("Social Media Sentiment")
    st.write(sentiment_data.head())

    st.subheader("Transaction History")
    st.write(txn_data.head())

    st.success("✅ Data uploaded successfully!")

# Get Recommendation
st.subheader("🔍 Get Personalized Recommendation")
customer_id_input = st.text_input("Enter Customer ID:")

if st.button("🔮 Generate Recommendation"):
    # Filter customer details
    user = customer_data[customer_data["Customer ID"] == customer_id_input]

    if not user.empty:
        # Retrieve sentiment and transaction history
        sentiment = sentiment_data[sentiment_data["User ID"] == f"USER_{customer_id_input}"]
        transaction = txn_data[txn_data["Customer ID"] == customer_id_input]

        # Construct improved prompt
        prompt = f"""
        Based on the following customer data, provide a personalized product or service recommendation:

        Customer Profile:
        - Name: {user.iloc[0]['Name']}
        - Age: {user.iloc[0]['Age']}
        - Occupation: {user.iloc[0]['Occupation']}
        - Income: {user.iloc[0]['Income']}

        Sentiment Data:
        {sentiment.to_json(orient="records")}

        Transaction History:
        {transaction.to_json(orient="records")}

        **Only provide a natural language recommendation, not a list of steps or code.**
        """

        # Query Llama 3 with correct model
        response = together.Completion.create(
            model="meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",  # Ensure the model name is correct
            prompt=prompt,
            max_tokens=300,  # Increased token limit
            temperature=0.6,  # Reduce randomness
            stop=["\n\n"]  # Prevent unnecessary text generation
        )

        # Display the recommendation
        st.subheader("📢 Personalized Recommendation:")
        st.write(response.choices[0].text.strip())  # Clean output

    else:
        st.error("❌ Customer ID not found!")
