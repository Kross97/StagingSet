self.addEventListener('message', (e) => {
    let i=0;
    while(i<=1e11) {
       i++;
    }
    const workerResult = 'Result: ' + (e.data[0]) + i;
    postMessage(workerResult);
});