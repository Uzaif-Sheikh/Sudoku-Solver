

def main_boss(array):
    copy = array
    solve_sudoku_1(0, 0, array)
    return array


def solve_sudoku_1(r,c,array):
    
    if(r == 8 and c == 9):
        return True
    
    if(c == 9):
        r += 1
        c = 0
    
    if(array[r][c] != 0):
        return solve_sudoku_1(r, c+1, array)

    for i in range(1,10):
        if(check(r,c,array,i)):
            array[r][c]  = i
            if(solve_sudoku_1(r, c+1, array)):
                return True


    array[r][c] = 0

    return False



def check(r,c,array,num):
    value = array[r][c]
    for x in range(9):
        if array[r][x] == num:
            return False
 
    for x in range(9):
        if array[x][c] == num:
            return False
 
    startRow = r - r % 3
    startCol = c - c % 3
    for i in range(3):
        for j in range(3):
            if array[i + startRow][j + startCol] == num:
                return False
    return True


