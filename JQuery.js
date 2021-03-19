// $('h1').hide();
// $('h1#heading1').hide();
// $('.heading2').hide();

// $('p span').css('color', 'red');

// $('ul#list li:first').css('color', 'red');
// $('ul#list li:last').css('color', 'green');
// $('ul#list li:even').css('background-color', 'yellow');
// $('ul#list li:odd').css('background-color', '#ccccc');
// $('ul#list li:nth-child(3n)').css('list-style', 'none');

// $(':button').hide();
// $(':text').hide();
// $(':submit').hide();

// $('[herf]').css('color','red');
// $('a[herf="http//yahoo.com"]').css('color','green');

// $('*').hide();

// $(document).ready(function(){

// $('#btn1').click(function(){
//     alert('Button clicked');
// });

// $('btn1').on('click',function(){
// alert('Button clicked');
// });
// $('#btn1').on('click',function(){
//     // $('.para1').hide();
//     $('.para1').toggle();

// });

// $('#btn2').on('click',function(){
//     $('.para1').show();
// });
// $('#btn1').dblclick(function(){
//     $('.paral').toggle();
// });

// $('#btn1').hover(function(){
//     $('.paral').toggle();
// });
// $('#btn1').on('mouseenter',function(){
//     $('.paral').toggle();
// });

// $('#btn1').on('mouseleave',function(){
//     $('.paral').toggle();
// });
// $('#btn1').on('mousemove', function(){
//     $('.paral').toggle();
// });
// $('#btn1').on('mousedown',function(){
//     $('.paral').toggle();
// });
// $('#btn1').on('mouseup',function(){
//     $('.paral').toggle();
// });

// $('btn1').on('click',function(e){
    // console.log(e);
    // alert(e.currentTarget.id);
    // alert(e.currentTarget.innerHTML);
    // alert(e.currentTarget.outerHTML);
    // alert(e.currentTarget.className);
//     });

//     $(document).on('mousemove',function(e){
//         $('#coords').html('coords: y: '+e.clienty+"x: "+e.clientx);
//         });  
// });

// $('input').focus(function(){
//     // alert('Focus');
//     // $('input#name').css('background', 'pink');
//     $(this).css('background', 'pink');
// });
// $('input').blur(function(){
//     $(this).css('background', 'white');
// });
// $('input').keyup(function(e){
//     console.log(e.target.value);
// });

// $('select#gender').change(function(e){
//     alert(e.target.value);
// });
// $('#form').submit(function(e){
//     e.preventDefault();
//     // console.log('submitted');
//     var name = $('input#name').val();
//     console.log(name);
// });

// $(document).ready(function(){
//     // $('p.para1').css('color', 'red');
//     $('p.para1').css({color:'red',background:'#ccc'});
//     // $('p.para2').addClass('myClass');
//     // $('p.para2').removeClass('myClass');
//     $('#btn1').click(function(){
//         $('p.para2').toggleclass('myClass');
//     });

//     $('#myDiv').text('Hello World');
//     $('#myDiv').html('<h3>Hello World</h3>');
//     alert($('#myDiv').text());
// });

// $('ul').append('<li> Append List Item </li>');
// $('ul').prepend('<li> Prepend List Item </li>');

// $('.para1').appendTo('.para2');
// $('.para1').prependTo('.para2');

// $('ul').before('<h4>Hello</h4>');
// $('ul').after('<h4>Hello</h4>');

// $('ul').empty();
// $('ul').detach();

// $('a').attr('target', '_blank');
// alert($('a').attr('href'));
// $('a').removeAttr('target');

// $('p').wrap('<h1>');
// $('p').wrapAll('<h1>');

$('#newItem').keyup(function(e){
    var code = e.which;
    if(code == 13){
        e.preventDefault();
        $('ul').append('<li>'+e.target.value+'</li>');
    } 
});

var myArr = ['Brad','Kelley', 'Nate', 'Jose'];
$.each(myArr,function(i, val){
    $('#users').append('<li>'+val+'</li>');
});
