$(document).ready(function(){

    $('*').css({'margin':'0', 'padding':'0'});
    
    const persons = JSON.parse(simpsons);
    
    
    for (let i = 0; i < persons.length; i++){
    
        let person = `<div class="person_wrapper">
        <img src="${persons[i].image}">
            <div class="person_name">
                <p>${persons[i].name}</p>
                <p class="person_relation">${persons[i].relation}</p>
                <input type="button" class="btn" value="Show more" serri="${i}"></input>
                <h1 id="display"></h1>
            </div>
        </div>`;
        $('#wrapper').append(person);

       
            
    }
    
    $('.btn').click(function(){
        let val = $(this).attr("serri");
        $(this).parent().find("#display").text(persons[val].job);
    });

 
    
    
    });