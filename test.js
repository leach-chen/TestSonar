function test1(a) {  // Noncompliant
    let b = 12;
    if (a) {
      return b;
    }
    return b;
}

function test2(){
  i = 1;         // Noncompliant; i is global

  for (j = 0; j < array.length; j++) {  // Noncompliant; j is global now too
    // ...
  }
}


function test3(){
    let param = 0
    switch (param) {
        case 0:      
          break;
        default: // default clause should be the first or last one       
          break;
        case 1:        
          break;
      }
}

function test4(){
  let target =-5;
  let num = 3;
  
  target =- num;  // Noncompliant; target = -3. Is that really what's meant?
  target =+ num; // Noncompliant; target = 3
}

function test5(){
  let target =-5;
  let num = 3;
  
  target =- num;  // Noncompliant; target = -3. Is that really what's meant?
  target =+ num; // Noncompliant; target = 3
}