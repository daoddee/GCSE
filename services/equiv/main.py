import os, json
from sympy import sympify, Eq
from flask import Flask, request


app = Flask(__name__)
SECRET = os.environ.get('EQUIV_API_SECRET')


@app.post('/equivalent')
def equivalent():
if request.headers.get('x-secret') != SECRET:
return {'ok': False}, 401
data = request.get_json()
a, b = data['a'], data['b']
try:
A, B = sympify(a), sympify(b)
return {'ok': True, 'equivalent': bool(Eq(A, B))}, 200
except Exception as e:
return {'ok': False, 'error': str(e)}, 400


if __name__ == '__main__':
app.run(host='0.0.0.0', port=8787)
