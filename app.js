"use strict";
////////////container area start///////////////
let input_data = '';
let output_data = '';
let repeat = 10;
let flag1=true, flag2=true;
///////////////container area end///////////////////





//////////////////////html element objects start//////////////////////
const input_f = document.getElementById('input_f');
const output_f = document.getElementById('out');
const repeat_input = document.getElementById('re_count');
const re_btn = document.getElementById('re_btn');
const m_box = document.getElementById('m_box');
const cp_btn = document.getElementById('cp_btn');
const m_text = document.getElementById('m_text');
const cp_box = document.getElementById('cp_box');
const words = document.getElementById('words'); 
const chars = document.getElementById('chars'); 
const output_box_text = document.getElementById('cp_text');

//checkboxes
const chk1 = document.getElementById('check1');
const chk2 = document.getElementById('check2');
const chk3 = document.getElementById('check3');
////////////////////html element objects end//////////////////////////////////





//////////////function and eventlisten area start////////////

const time_id = setInterval(()=>{
     input_data = input_f.value;
     chars.innerText = 'Characters: ' + input_data.length;

     if(input_data !== ''){
    words.innerText = "Words: " + input_data.match(/\w+/g).length;
    }


    if(input_f.value === '') {
        words.innerText = 'Words: 0';
    }

    }, 1000);


re_btn.addEventListener('click', ()=> {
    if(input_f.value != "") {
    repeat = parseInt(repeat_input.value, 10);
    
    ///////if the repeatation is more than 10000 times its set automatically set to 10000//////////
    if(repeat >= 5000) {repeat = 5000;}

    input_data = input_f.value;

    for(let counter=0; counter<repeat; counter++) {
        output_data += input_data;
        
            if(chk1.checked){
                if(chk3.checked) {
                    output_data += '.';
                    flag1 = false;
                }

                if(chk2.checked) {
                    output_data += ' ';
                    flag2 = false;
                }

                output_data += '\n';
            }
        
            if(chk2.checked && flag2) {
                if(chk3.checked) {
                    output_data += '.';
                    flag1 = false;
                }

                output_data += ' ';
            }

            if(chk3.checked && flag1) {
            output_data += '.';
            }
    }
    
    //reset all the input fields
    input_f.value = "";
    output_f.value = ""; 
    repeat_input.value = ""; 

    if(output_data.length < 100000) {
    output_f.value = output_data;
    output_data = "";
    }
    else {
        let new_out_data = output_data.slice(0,100000);
        output_f.value = new_out_data;
        output_data = "";
    }

}
else {
    output_f.value = ""; 
    m_box.style.visibility = 'visible';
    setTimeout(()=>{
        m_box.style.visibility = 'hidden';
    }, 3000);
}
});

cp_btn.addEventListener('click', ()=>{
    output_f.select();
    document.execCommand('copy');
    cp_box.style.visibility = 'visible';
    if(output_f.value.length == 0) {output_box_text.innerText = "Field is empty!"}
    setTimeout(()=>{
        cp_box.style.visibility = 'hidden';
    }, 3000);
});
//function and eventlisten area end
