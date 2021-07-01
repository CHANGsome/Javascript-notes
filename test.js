function print(){
    console.log(this.a+this.b);
}
print.bind({a:10,b:20}).bind({a:1,b:2});