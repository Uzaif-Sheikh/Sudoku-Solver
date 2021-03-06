#include <iostream>
using namespace std;

#define SIZE 9

int puzzle[SIZE][SIZE] = {{9, 2, 0, 0, 0, 8, 0, 0, 0},
                          {4, 0, 3, 0, 6, 2, 8, 9, 0},
                          {8, 0, 1, 0, 0, 3, 7, 2, 0},
                          {0, 0, 4, 0, 0, 0, 1, 0, 0},
                          {0, 8, 0, 0, 2, 0, 0, 7, 9},
                          {2, 0, 0, 0, 0, 0, 5, 3, 0},
                          {3, 0, 2, 1, 0, 9, 0, 8, 0},
                          {0, 6, 0, 0, 0, 4, 9, 1, 3},
                          {1, 9, 7, 0, 3, 0, 0, 0, 4}};

#define SUB1 0
#define SUBE1 2
#define SUB2 3
#define SUBE2 5
#define SUB3 6
#define SUBE3 8

int check_rule(int r,int c,int puzzle[SIZE][SIZE])
{

    int value = puzzle[r][c];

    int row = 0;
    int col = 0;
    int squ = 0;

    for (int i = 0; i < SIZE; i++)
    {

        if (puzzle[r][i] == value)
        {
            if (i != c)
            {
                row = 1;
            }
        }

        if (puzzle[i][c] == value)
        {
            if (i != r)
            {
                col = 1;
            }
        }
    }

    if ((r >= 0 && r <= 2) && (c >= 0 && c <= 2))
    {

        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                if (puzzle[i][j] == value)
                {

                    if (i != r && j != c)
                    {

                        squ = 1;
                    }
                }
            }
        }
    }

    else if ((r >= 0 && r <= 2) && (c >= 3 && c <= 5))
    {

        for (int i = 0; i < 3; i++)
        {
            for (int j = 3; j < 3; j++)
            {
                if (puzzle[i][j] == value)
                {

                    if (i != r && j != c)
                    {

                        squ = 1;
                    }
                }
            }
        }
    }

    else if ((r >= 0 && r <= 2) && (c >= 6 && c <= 8))
    {

        for (int i = 0; i < 3; i++)
        {
            for (int j = 6; j < 3; j++)
            {
                if (puzzle[i][j] == value)
                {

                    if (i != r && j != c)
                    {

                        squ = 1;
                    }
                }
            }
        }
    }

    else if ((r >= 3 && r <= 5) && (c >= 0 && c <= 2))
    {

        for (int i = 3; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                if (puzzle[i][j] == value)
                {

                    if (i != r && j != c)
                    {

                        squ = 1;
                    }
                }
            }
        }
    }

    else if ((r >= 3 && r <= 5) && (c >= 3 && c <= 5))
    {

        for (int i = 3; i < 3; i++)
        {
            for (int j = 3; j < 3; j++)
            {
                if (puzzle[i][j] == value)
                {

                    if (i != r && j != c)
                    {

                        squ = 1;
                    }
                }
            }
        }
    }

    else if ((r >= 3 && r <= 5) && (c >= 6 && c <= 8))
    {

        for (int i = 3; i < 3; i++)
        {
            for (int j = 6; j < 3; j++)
            {
                if (puzzle[i][j] == value)
                {

                    if (i != r && j != c)
                    {

                        squ = 1;
                    }
                }
            }
        }
    }

    else if ((r >= 6 && r <= 8) && (c >= 0 && c <= 2))
    {

        for (int i = 6; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                if (puzzle[i][j] == value)
                {

                    if (i != r && j != c)
                    {

                        squ = 1;
                    }
                }
            }
        }
    }

    else if ((r >= 6 && r <= 8) && (c >= 3 && c <= 5))
    {

        for (int i = 6; i < 3; i++)
        {
            for (int j = 3; j < 3; j++)
            {
                if (puzzle[i][j] == value)
                {

                    if (i != r && j != c)
                    {

                        squ = 1;
                    }
                }
            }
        }
    }

    else if ((r >= 6 && r <= 8) && (c >= 6 && c <= 8))
    {

        for (int i = 6; i < 3; i++)
        {
            for (int j = 6; j < 3; j++)
            {
                if (puzzle[i][j] == value)
                {

                    if (i != r && j != c)
                    {

                        squ = 1;
                    }
                }
            }
        }
    }

    if(row == 1 || col == 1 || squ == 1){
        return 0;
    }
    else{
        return 1;
    }

}





bool solve(int r,int c,int puzzle[SIZE][SIZE])
{

    if(r == 8 && c == SIZE){

        return true;
    }

    if(c == SIZE){

        r++;
        c = 0;


    }

    if(puzzle[r][c] != 0){
        return solve(r,c+1,puzzle);
    }


    for (int i = 1; i <= SIZE; i++){
        puzzle[r][c] = i;
        if(check_rule(r,c,puzzle)){
            if(solve(r,c+1,puzzle)){
                return true;
            }

        }

    }

    puzzle[r][c] = 0;
    
    return false;

}




int main(void)
{

    for(int i = 0; i < SIZE; i++){

        if(i%3 == 0){
            cout << "--------------------------\n";
        }

        for(int j = 0; j < SIZE; j++){
            if(j %3 == 0){
                cout << "| ";
            }
            cout << puzzle[i][j] << " ";

        }

        cout << "|\n";
    }


    cout << "\n";

    cout << "Start \n";


    cout << "\n";

    solve(0,0,puzzle);




    for(int i = 0; i < SIZE; i++){

        if(i%3 == 0){
            cout << "--------------------------\n";
        }

        for(int j = 0; j < SIZE; j++){
            if(j %3 == 0){
                cout << "| ";
            }
            cout << puzzle[i][j] << " ";

        }

        cout << "|\n";
    }

    return 0;

}
