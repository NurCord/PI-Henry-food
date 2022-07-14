export function SortArrayUpHS(x, y){
    return x.healthScore - y.healthScore;
}

export function SortArrayDownHS(x, y){
      return y.healthScore - x.healthScore;
}

export function SortArrayUp(x, y){
    if (x.title < y.title)return -1;
    if (x.title > y.title)return 1;
    return 0;
}

export function SortArrayDown(x, y){
    if (x.title > y.title)return -1;
    if (x.title < y.title)return 1;
    return 0;
}

