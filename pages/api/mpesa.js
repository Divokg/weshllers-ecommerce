const Mpesa = 
headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer Ay19WFodbDM589Uy5KCiK9Vh545F");
fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
  method: 'POST',
  headers,
  body: JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIwNjE2MTQ1OTU3",
    "Timestamp": "20220616145957",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254729666501,
    "PartyB": 174379,
    "PhoneNumber": 254729666501,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  })
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));