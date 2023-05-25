#include<stdio.h>

int main()
{

    int blockSize = 5, i, block[50], totalSpace = 0, newSpace, array[50];

    for(i = 0; i< blockSize; i++)
    {
            printf("\nEnter space for block number : %d = ", i);
    }

    printf("\n\nGiven block: ");

    for(i = 0; i< blockSize; i++)
    {
        if(i==0)
        {
            printf("\n%d |%d mb| OS", i, block[i]);
        }
        else
        {
            printf("\n%d |%d mb|", i, block[i]);
        }

        totalSpace = totalSpace + block[i];

    }
    printf("\n\nTotal space: %d mb", totalSpace);

    printf("\n\nEnter the space you want to fit: ");
    scanf("%d", &newSpace);

    // For first fit
    for(i = 1; i< blockSize; i++)
    {
        if(block[i] >= newSpace)
        {
            printf("\n\nFist fit on block number : %d", i);
            break;
        }
    }

    // For best fit
    int best, best_pos;
    for (i = 0; i < blockSize; i++)
    {
        if (block[i] >= newSpace && block[i] < best)
        {
            best = block[i];
            best_pos = i;
        }
    }

    printf("\n\nBest fit on block number : %d", best_pos);


    int max = 0, worse_pos;

    // For worse fit
    for(i = 1; i < blockSize; i++)
    {
        if(max < block[i])
        {
            max = block[i];
            worse_pos = i;
        }
    }


    printf("\n\nWorse fit on block number : %d", worse_pos);


    return 0;
}