arr = [];
var w = 5;
var canvas = null;
function MergeSort() {
    if(canvas == null)
    {
        canvas = new p5( function (p) {
        p.setup =  function(){
            p.createCanvas(p.windowWidth - 80, p.windowHeight);
            arr = [];
            states = [];
            for(var l = 0 ; l < p.width/w ; l++)
                {
                    arr.push(Math.floor(p.random(p.height)));
                    states[l] = -1;
                }
            mergesort(arr , 0 , arr.length-1);    
            }
    async function mergesort(arr , st , end)
    {
        if(st < end) 
        {
            let mid = Math.floor(st + (end-st)/2);
            states[mid] = -1;
            await Promise.all([
                mergesort(arr , st , mid),
                mergesort(arr , mid+1 , end),
               
            ]);
            arr = await merge(arr,st,mid,end);
        }
    }
    async function merge(arr , st , mid , end)
    {
        let temp = [];
        let temp_st1 = st , temp_st2 = mid+1;
        states[mid] = -1;
        while(temp_st1 <= mid && temp_st2 <= end)
        {
            await sleep(1);
            states[temp_st1] = 1;
            states[temp_st2] = 1;
            
            if(arr[temp_st1] < arr[temp_st2])
            {
                temp.push(arr[temp_st1]);
                temp_st1++;
                states[temp_st1] = 0;
                states[temp_st2] = 0;
            }
            else 
            {
                temp.push(arr[temp_st2]);
                temp_st2++;
                states[temp_st1] = 0;
                states[temp_st2] = 0;
            }
        }
        while(temp_st1 <= mid)
        {
            temp.push(arr[temp_st1]);
            
            states[temp_st1] = 1;
            temp_st1++;
        }
        while(temp_st2 <= end)
        {
            temp.push(arr[temp_st2]);
            states[temp_st2] = 1;
            temp_st2++;
        }
        
        for(let i = 0 ; i < temp.length ; i++)
        {
            arr[i+st] = temp[i];
            states[i+st] = 0;
        }
        
        return arr;
    }
    p.draw = function(){
        p.background(48 , 189 , 242);
        
        for(var l = 0 ; l < arr.length ; l++)
        {
            if(states[l] == 0)
            {
                p.fill(255,255,0);
            }
            else if(states[l] == 1)
            {
                p.fill(255,0,0);
            }
            else
            {
                p.fill(0,0,0);
            }
            p.rect(l*w , p.height-arr[l] , w , arr[l]);
        }
    }
    function sleep(ms)
    {
            return new Promise(resolve => setTimeout(resolve,ms));
    }
        }, "merge-div");
    }
    else
    {
        canvas.remove();
        canvas = null;
        arr = [];
        states = [];
    }
}