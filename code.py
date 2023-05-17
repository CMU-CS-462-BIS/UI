def addition(x, y):
    return x + y

def subtraction(x,  y):
    return x - y

def multiplication(x,  y):
    return x * y

def division(x,  y):
    return x / y

opt = int(input("Choose Operation from 1(Add), 2(Sub), 3(Multi), 4(Div) = "))

n1 = int(input("First Number        = "))
n2 = int(input("Second Number = "))

if opt == 1:
    print(n1, ' + ', n2, '  =  ', addition(n1, n2))
elif opt == 2:
    print(n1, ' - ', n2, '  =  ', subtraction(n1, n2))
elif opt == 3:
    print(n1, ' * ', n2, '  =  ', multiplication(n1, n2))
elif opt == 4:
    print(n1, ' / ', n2, '  =  ', divison(n1, n2))
else:
    print('Invalid Input')