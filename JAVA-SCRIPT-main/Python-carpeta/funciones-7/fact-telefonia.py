
def calcularValorImpulso(impulso): 
    return 100 * impulso

def calcularTarifaBasica(estrato):  

    if estrato == 1:  
        return 10000 
    elif estrato == 2: 
        return 15000
    
    elif estrato == 3: 
        return 20000 
    
    elif estrato == 4: 
        return 25000
    
    else: 
        return 30000

def leerEstrato(msj):
    while True: 
        try: 
            n = int(input(msj))
            if n < 1 or n > 5: 
                print("Estrato invalido. Debe ser entre (1-5)")  
                continue
            return n 
        except ValueError: 
            print("Error al ingresar el numero.") 

def leerInt(msj):
    while True: 
        try: 
            n = int(input(msj))
            if n < 1: 
                print("Valor invalido. Debe ser mayor a cero") 
                continue
            return n 
        except ValueError: 
            print("Error al ingresar el numero.") 

def leerNombre(msj): 
    while True: 
        try: 
            nom = input(msj)
            nom.strip() 
            if len(nom) == 0 or not nom.isalnum(): 
                print("Nombre invalido") 
                continue
            return nom 
        except Exception as e: 
            print("Error al ingresar el nombre. " , e)
            


n = leerInt ("Ingresa la cantidad de usuarios ") 

valtot = 0 

for i in range(1 , n+1): 
    print("\nDatos del usuario # " , i)
    nombre = leerNombre("Nombre? ") 
    estrato = leerEstrato("Estrato? ") 
    impulso = leerInt("Impulsos? ") 
    valtbas = calcularTarifaBasica(estrato) 
    valimpu = calcularValorImpulso(impulso) 

    print("=" *30) 
    print("Nombre: " , nombre) 
    print("Valor a pagar: " , valtbas + valimpu)
    print("Tarifa bàsica: " , valtbas) 
    print("Valor de impulsos: " ,valimpu) 

    valtot += valtbas + valimpu 

print("\n " , "*" *30) 
print("El valor total a pagar es: ",valtot )