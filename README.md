![image](https://github.com/user-attachments/assets/be7f3d4e-4f4e-49c7-9434-bdfb17e32868)# 🚀 Personalized Banking Recommendation Model

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction
The Personalized Banking Recommendation Model is an AI-driven system designed to enhance the banking experience by providing smart financial insights, personalized offers, and savings recommendations based on a user’s expenditure patterns. By analyzing transaction history across savings and current accounts, the model suggests customized offers, budgeting strategies, and financial products that align with a user’s spending habits and financial goals.


## 🎥 Demo
🔗 [Live Demo](#) (if applicable)  
📹 [Video Demo](/artifacts/demo/mobile-app-creative-codex.mp4) (if applicable)  


🖼️ Screenshots:

<img width="416" alt="image" src="https://github.com/user-attachments/assets/0cb1f5df-3201-41dd-8280-3bc597775a06" />
<img width="209" alt="image" src="https://github.com/user-attachments/assets/29255f44-7c2e-4441-943f-b67cb2e5c8dc" />
<img width="418" alt="image" src="https://github.com/user-attachments/assets/780eda19-4ae8-414f-ab7c-f6013277bad7" />
<img width="314" alt="image" src="https://github.com/user-attachments/assets/b858fb3d-ce77-407b-bcb0-a9c678909f5e" />
<img width="317" alt="image" src="https://github.com/user-attachments/assets/1caf3919-bb1d-44c9-8a1d-c47e5f1bc0ea" />
<img width="310" alt="image" src="https://github.com/user-attachments/assets/dd128bcc-dabe-4b14-9141-5f3322eb1a8b" />
<img width="809" alt="image" src="https://github.com/user-attachments/assets/616e288a-ef44-410d-a631-0ab9fc91156e" />



## 💡 Inspiration
The inspiration behind developing a **Personalized Banking Recommendation Model** stems from the growing need for smarter financial management and customer-centric banking experiences. Many individuals struggle with budgeting, saving, and making informed financial decisions, leading to overspending and financial stress. By leveraging **AI and machine learning**, banks can analyze user transactions in **savings and current accounts** to provide **personalized savings recommendations, expense insights, and tailored financial offers**. This not only helps customers make better financial choices but also enhances engagement by offering relevant banking products such as **loans, credit cards, and investment options**. In the era of **digital banking and FinTech innovations**, AI-driven solutions can bridge the gap between traditional banking and modern financial expectations, ensuring that users receive real-time, data-driven guidance for a more secure and optimized financial future.

## ⚙️ What It Does

## Features  

### 📌 Personalized Offers & Discounts  
- Suggests **credit card cashback offers, merchant discounts, and loan options** based on spending patterns.  
- Identifies frequent spending categories (**e.g., groceries, travel, dining**) and recommends **bank-partnered deals**.  

### 💰 Automated Savings Recommendations  
- Analyzes **monthly income and expenditures** to suggest **optimal savings plans**.  

### 📊 Expense Categorization & Insights  
- Uses **AI-based classification** to group transactions into categories like **rent, bills, dining, entertainment, and savings**.  
- Provides **monthly spending reports** to help users **track and manage finances better**.  


## 🛠️ How We Built It
- This project leverages the Llama 3.1 405B model via Together AI to generate personalized recommendations.
- It analyzes customer profiles, sentiment data, and transaction history to suggest relevant products or services.

## 🚧 Challenges We Faced
- Large Model Access : Limited system resources, so we use Together AI's API for remote inference.
- Data Formatting : Ensured structured data handling to avoid incomplete or incorrect responses.
- Output Accuracy : Fine-tuned prompt engineering to generate human-readable and relevant recommendations.
- Performance : Increased max tokens and adjusted temperature for better results.



## 🏃 How to Run
1. Clone the repository  
   ```sh
   git clone https://github.com/ewfx/aidhp-creative-codex.git
   ```
2. Install dependencies  
   ```sh
   pip install together streamlit pandas openpyxl flask
   ```
3. Run the project  
   ```sh
   python app.py
   ```

## 🏗️ Tech Stack
- 🔹 Frontend: React / Streamlit / Mobile App
- 🔹 Backend:
    - Node.js
    - Flask
    - Python (Pandas for data processing)
- 🔹 Database: MongoDB / Custom data
- 🔹 Other:
    - Together AI API (for AI-powered for recommendations)
    - Model (meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo)

## 👥 Team
- Ranjith
- Ankit
- Uday
- Chandra

