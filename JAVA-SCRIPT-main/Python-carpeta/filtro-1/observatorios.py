#código del observatorio,nombre del observatorio, fecha del registro (día, mes y año) temperatura máxima y temperatura mínima. 

import json

def ordenarAscendenteCodigo(lst): 
    n = len(lst)
    # print(lstLibros)
    for i in range(n-1):
        intercambio = False
 
        for j in range(n-1-i):
            # k -> llave del codigo de la posición j de la lista
            # k1 -> llave del codigo de la posicion j+1 de la lista
            k = list(lst[j].items())[0][0]
            k1 = list(lst[j+1].items())[0][0]
            #print(list(lst[j].items())[0][1])
            #print("K, K+1" , k, k1)
            if k > k1:
                lst[j], lst[j+1] = lst[j+1], lst[j]
                intercambio = True
        #print(lst)
        if intercambio == False:
            break 
    print("{:<20} {:<20} {:<20}".format("Codigo","Nombre", "TempMin", "TempMax" , "año"))

    # for k , v in lst.items(): 
    #     print(f"Codigo: {k}\n Nombre: {v['nombre']} \n Horas: {v['HorasTrabajadas']} \n Valor hora: {v['ValorHora']:,}")

    for i in range(len(lst)):  
        #print(lst[i])
        k = list(lst[i].items())[0][0] 
        #print(k)
        for elemento in lst[i]: 
            print("{:<20} {:<20} {:<20}".format( k , lst[i][elemento]['nombre'],lst[i][elemento]['temperatura-min'],lst[i][elemento]['temperatura-max'],lst[i][elemento]['ano'],lst[i][elemento]['mes'],lst[i][elemento]['dia']))
        

def existeId(lst , id): 
    #print(lst)

    for datos in lst:  
        #print(datos)
        k = int(list(datos.keys())[0]) #Devuelve la lista de las llaves pero se debe colocar el list para que la ordene correctamente 
        #print(k)
        if k == id:
            return True 
        
        



    return False
    
def ordenarAscendenteNombre(lst): 
    n = len(lst)
    # print(lstLibros)
    for i in range(n-1):
        intercambio = False
 
        for j in range(n-1-i):
            # k -> llave del codigo de la posición j de la lista
            # k1 -> llave del codigo de la posicion j+1 de la lista
            k = list(lst[j].items())[0][1]["nombre"]
            k1 = list(lst[j+1].items())[0][1]["nombre"]
            #print(list(lstLibros[j].items())[0][1]["titulo"])
            #print("K, K+1, nombre: ", k, k1, nom)
            if k > k1:
                lst[j], lst[j+1] = lst[j+1], lst[j]
                intercambio = True
 
        if intercambio == False:
            break 
    
    for i in range(len(lst)):  
        #print(lst[i])
        k = list(lst[i].items())[0][0] 
        #print(k)
        for elemento in lst[i]: 
            print("{:<20} {:<20} {:<20}".format( k , lst[i][elemento]['nombre'],lst[i][elemento]['temperatura-min'],lst[i][elemento]['temperatura-max'],lst[i][elemento]['ano']))


    
def guardarObservatorio(lst , rutaJson): 

    try:  #Abrimos el json en modo escritura
        fd = open(rutaJson , "w")  
    except Exception as e: 
        print("Error al abrir el archivo para guardar el libro\n" , e)

    try: #Si abrio guarde la lista de los libros en el archivo
        json.dump(lst,fd)  
    except Exception as e: 
        print("Error al guardar la informacion del empleado\n" , e) 
        return None


    #Si nada fallo entonces cierre el archivo y retorne True
    fd.close() 
    return True

def cargarInfo(lst , rutaCvs , rutaJson):   
      
    dicObservatorios = {}  

    fd = open(rutaCvs , "r") #Fd es la la apertura del archivo 

    linea = fd.readlines()

    for dato in linea: 
        
        

        dicObservatorios = {} 
        datos = dato.split(";") 
        
        
        codigo = int(datos[0].strip())
        nombre = datos[1].strip()
        tempMin = float(datos[2].strip())
        tempMax = float(datos[3].strip())

        fechaSep = datos[4].split("/") 

        año = int(fechaSep[2].strip())
        mes = int(fechaSep[1].strip())
        
        dia = int(fechaSep[0].strip())
        

        dicObservatorios[codigo] = {"nombre":nombre , "temperatura-min":tempMin , "temperatura-max":tempMax , "ano":año , "mes":mes,"dia":dia}  

          

        lst.append(dicObservatorios)

    if guardarObservatorio (lst , rutaJson) == True:  
        #Si nada fallo retorna True y significa que se guardo la listo
        print("Los datos se han guardado con exito") 

    else: 
        input("Ocurrio un error al guardar los datos") 
    
    
    fd.close()

    
    
    return lst
    
def listarDatos(lst): 
    lstCodigo = []

    id = int(input("Codigo? "))   
    while not existeId(lst , id): 
        print("La id no existe") 
        return
    
    for i in range(len(lst)):  
        datos = lst[i] 
        k = int(list(datos.keys())[0])
        if k == id: 
            #print(datos) 
            lstCodigo.append(lst[i])
                

    n = len(lstCodigo)
    input()
    for i in range(n-1):
        intercambio = False

        for j in range(n-1-i):
            # k -> llave del codigo de la posición j de la lista
            # k1 -> llave del codigo de la posicion j+1 de la lista
            k = list(lstCodigo[j].items())[0][1]['ano']
            k1 = list(lstCodigo[j+1].items())[0][1]['ano']
            # print(list(lstLibros[j].items())[0][1])
            # print("K, K+1, : ", k, k1, )  
            if k > k1:
                lstCodigo[j], lstCodigo[j+1] = lstCodigo[j+1], lstCodigo[j]
                intercambio = True 
                
        if intercambio == False: 

            kt = list(lstCodigo[j].items())[0][1]['mes']
            k1t = list(lstCodigo[j+1].items())[0][1]['mes'] 
            #print("K, K+1, : ", kt, k1t, ) 
            #input()

            if kt > k1t:
                lstCodigo[j], lstCodigo[j+1] = lstCodigo[j+1], lstCodigo[j]
                intercambio = True

                    # t= lstLibros[i]
                    # lstLibros[i] = lstLibros[j]
                    # lstLibros[j] = t

            ktt = list(lstCodigo[j].items())[0][1]['dia']
            k1tt = list(lstCodigo[j+1].items())[0][1]['dia'] 
            #print("K, K+1, : ", kt, k1t, ) 
            #input()

            if ktt > k1tt:
                lstCodigo[j], lstCodigo[j+1] = lstCodigo[j+1], lstCodigo[j]
                intercambio = True

                    # t= lstLibros[i]
                    # lstLibros[i] = lstLibros[j]
                    # lstLibros[j] = t 
        

        for i in range(len(lstCodigo)): 

            k = list(lstCodigo[i].items())[0][0]  

            datos = lstCodigo[i] 

            for elemento in lstCodigo[i]:

                print(f"Codigo: {k}")
                print(f"Nombre: {lstCodigo[i][elemento]['nombre']}") 
                print(f"TempMax: {lstCodigo[i][elemento]['temperatura-min']}") 
                print(f"TempMin: ${lstCodigo[i][elemento]['temperatura-max']}") 
                print(f"Fecha: {lstCodigo[i][elemento]['ano']}/{lstCodigo[i][elemento]['mes']}/{lstCodigo[i][elemento]['dia']}") 



                input()
                
           
def listarTemperatura(lst) :  

    id = int(input("Codigo? "))   
    while not existeId(lst , id): 
        print("La id no existe") 
        return  
    
    lstCodigo = []
    
    for i in range(len(lst)):  
        datos = lst[i] 
        k = int(list(datos.keys())[0])
        if k == id: 
            #print(datos) 
            lstCodigo.append(lst[i]) 

    #print(lstCodigo) 

    n = len(lstCodigo)
    input()
    for i in range(n-1):
        lstTemp = []
        contador = 0

        for j in range(n):

            # k -> llave del codigo de la posición j de la lista
            # k1 -> llave del codigo de la posicion j+1 de la lista
            
            k = list(lstCodigo[j].items())[0][1]['temperatura-max']
            #print("K,  : ", k, )   
            lstTemp.append(k)
            contador += 1

        maximo = max(lstTemp) 
        minimo = min(lstTemp)
        promedio = sum(lstTemp)/contador
    
    for i in range(1): 
        datos = lstCodigo[i] 
        for elemento in lstCodigo[i]: 
            print(f"Codigo: {k}")
            print(f"Nombre: {lstCodigo[i][elemento]['nombre']}") 
            print(f"TempMax: {maximo}") 
            print(f"TempMin: {minimo}") 
            print(f"Promedio-Temp: {promedio}")
            print(f"Fecha: {lstCodigo[i][elemento]['ano']}/{lstCodigo[i][elemento]['mes']}/{lstCodigo[i][elemento]['dia']}") 

            input()
            break

def menu():
    while True:
        try:
            print("*** OBSERVATORIOS NACIONALES ***".center(40))
            print("MENU".center(40))
            
            print("1. Listado por codigos ")
            print("2. Listado por nombre ")
            print("3. Listar datos de un observatorio ")
            print("4. Listar temperatura max/min y promedio de un observatorio ") 
            print("5. Listado a nivel nacional por codigo") 
            print("6. Listado por promedio de temperaturas") 
            print("7. Salir del software")


            op = int(input(">>> Opción (1-7)? "))
            if op < 1 or op > 7:
                print("Opción no válida. Escoja de 1 a 7.")
                input("Presione cualquier tecla para continuar...")
                continue
            return op
        except ValueError:
            print("Opción no válida. Escoja de 1 a 7.")
            input("Presione cualquier tecla para continuar...") 


rutaCvs = "filtro-1/datos-llegada.csv"  
RutaJson = "filtro-1/datos.json"
lstObservatorios = [] 

lstObservatorios = cargarInfo(lstObservatorios, rutaCvs , RutaJson) 




while True:

    op = menu()

    if op == 1:
        ordenarAscendenteCodigo(lstObservatorios)
    elif op == 2:
        ordenarAscendenteNombre(lstObservatorios)
    elif op == 3:
        listarDatos(lstObservatorios)
    elif op == 4:
        listarTemperatura(lstObservatorios) 
    elif op == 5:
        listarNivelNacional() 
    elif op == 6:
        listaPromedioTemperatura()
    elif op == 7:
        print("Gracias por usar el software") 
        break