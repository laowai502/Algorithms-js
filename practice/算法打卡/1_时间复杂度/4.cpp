int cal(int m, int n) {
    int sum_1 = 0;
    int i = 1;
    for (; i<m; ++i)
    {
        sum_1 = sum_1 + i;
    }
    int sum_2 = 0;
    int j = 1;
    for (; j<n; ++j)
    {
        sum_2 = sum_2 + i;
    }
    return sum_1 + sum_2;
}

// O(m + n) 嵌套的话则为 O(m*n)