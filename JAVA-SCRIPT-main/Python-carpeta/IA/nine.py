""" #Fact of a number
def fact(n):
    if n == 0:
        return 1
    else:
        return n * fact(n - 1)    

n = int(input("Digite el numero: ")) 
print(fact(n)) 
 """
#numero de mayor a menor entre tres numeros
def mayorMenor(a, b, c):
    if a > b and a > c:
        return a
    elif b > a and b > c:
        return b
    elif c > a and c > b:
        return c
    else:
        return 0 

a = int(input("Digite el primer numero:"))
b = int(input("Digite el segundo numero:"))
c = int(input("Digite el tercer numero:")) 
print(mayorMenor(a, b, c))

