function drawL(n) {
    const lString = 'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL';
    for(var i = 0; i < n; i ++) {
        i != n - 1 ?
        console.log('L')
        :
        console.log(lString.slice(0, n));
    }
}

drawL(1);