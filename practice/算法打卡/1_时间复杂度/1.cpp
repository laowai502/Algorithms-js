int cal(int n)
{
    int sum = 0;
    int i = 1;
    for(; i<=n; ++i)
    {
        sum = sum + i;
    }
    return sum;
}

// O{n}