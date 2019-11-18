import requests

res = requests.post("http://localhost:8080/user/create", data={
    'email': 'romain.fouyerss',
    'firstName': 'romain',
    'lastName': 'asa',
    'password': 'test'
})

print(res.json())

res2 = requests.get("http://localhost:8080/user", headers={
    'Authorization': 'Bearer ' + res.json()['user']['accessToken']
})
print(res2.text)
