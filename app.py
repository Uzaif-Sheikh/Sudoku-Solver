from flask import Flask, app, request, render_template
import requests
from sudoku_solver import main_boss, solve_sudoku_1

app = Flask(__name__)

@app.route('/')
def check_message():
    return render_template("sudoku.html")

@app.route('/solve',methods=["POST"])
def solve_sudoku():
    check = [[0 for x in range(9)] for y in range(9)] 

    r = 0
    c = 0

    for i in range(1,4):
        for j in range(1,4):
            check[r][c] = int(request.form.get(str(i)+"-"+str(j))) 
            c +=1

    r = 1
    c = 0

    for i in range(1,4):
        for j in range(4,7):
            check[r][c] = int(request.form.get(str(i)+"-"+str(j))) 
            c +=1
            
    r = 2
    c = 0

    for i in range(1,4):
        for j in range(7,10):
            check[r][c] = int(request.form.get(str(i)+"-"+str(j))) 
            c +=1
            
    r = 3
    c = 0

    for i in range(4,7):
        for j in range(1,4):
            check[r][c] = int(request.form.get(str(i)+"-"+str(j))) 
            c +=1

    r = 4
    c = 0

    for i in range(4,7):
        for j in range(4,7):
            check[r][c] = int(request.form.get(str(i)+"-"+str(j))) 
            c +=1

    r = 5
    c = 0

    for i in range(4,7):
        for j in range(7,10):
            check[r][c] = int(request.form.get(str(i)+"-"+str(j))) 
            c +=1

    r = 6
    c = 0

    for i in range(7,10):
        for j in range(1,4):
            check[r][c] = int(request.form.get(str(i)+"-"+str(j))) 
            c +=1

    r = 7
    c = 0

    for i in range(7,10):
        for j in range(4,7):
            check[r][c] = int(request.form.get(str(i)+"-"+str(j))) 
            c +=1

    r = 8
    c = 0

    for i in range(7,10):
        for j in range(7,10):
            check[r][c] = int(request.form.get(str(i)+"-"+str(j))) 
            c +=1


    newArray = main_boss(check)

    if(solve_sudoku_1(0, 0,check) == False):
        return render_template("sudoku_solved.html",value="No solution for the sudoku")

    print(newArray)
    return render_template("sudoku_solved.html",value="solved sudoku:",val11=newArray[0][0],val12=newArray[0][1],val13=newArray[0][2],val21=newArray[0][3],val22=newArray[0][4],val23=newArray[0][5],
                            val31=newArray[0][6],val32=newArray[0][7],val33=newArray[0][8],val14=newArray[1][0],val15=newArray[1][1],val16=newArray[1][2],val24=newArray[1][3],val25=newArray[1][4],
                            val26=newArray[1][5],val34=newArray[1][6],val35=newArray[1][7],val36=newArray[0][8],val17=newArray[2][0],val18=newArray[2][1],val19=newArray[2][2],val27=newArray[2][3],
                            val28=newArray[2][4],val29=newArray[2][5],val37=newArray[2][6],val38=newArray[2][7],val39=newArray[2][8],val41=newArray[3][0],val42=newArray[3][1],val43=newArray[3][2],
                            val51=newArray[3][3],val52=newArray[3][4],val53=newArray[3][5],val61=newArray[3][6],val62=newArray[3][7],val63=newArray[3][8],val44=newArray[4][0],val45=newArray[4][1],
                            val46=newArray[4][2],val54=newArray[4][3],val55=newArray[4][4],val56=newArray[4][5],val64=newArray[4][6],val65=newArray[4][7],val66=newArray[4][8],val47=newArray[5][0],
                            val48=newArray[5][1],val49=newArray[5][2],val57=newArray[5][3],val58=newArray[5][4],val59=newArray[5][5],val67=newArray[5][6],val68=newArray[5][7],val69=newArray[5][8],
                            val71=newArray[6][0],val72=newArray[6][1],val73=newArray[6][2],val81=newArray[6][3],val82=newArray[6][4],val83=newArray[6][5],val91=newArray[6][6],val92=newArray[6][7],
                            val93=newArray[6][8],val74=newArray[7][0],val75=newArray[7][1],val76=newArray[7][2],val84=newArray[7][3],val85=newArray[7][4],val86=newArray[7][5],val94=newArray[7][6],
                            val95=newArray[7][7],val96=newArray[7][8],val77=newArray[8][0],val78=newArray[8][1],val79=newArray[8][2],val87=newArray[8][3],val88=newArray[8][4],val89=newArray[8][5],
                            val97=newArray[8][6],val98=newArray[8][7],val99=newArray[8][8])

if __name__ == "__main__":
    app.run()   
