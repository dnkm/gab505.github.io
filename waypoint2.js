function Waypoint2(elem, offset, fn){
    this.elem = elem;
    console.log(this.elem);
    this.offset = offset;
    this.fn = fn;

    this.onscroll = function(){
        let offset = window.innerHeight - this.elem.getBoundingClientRect().top;
        
        if(offset >  this.offset){
            this.fn();
            window.removeEventListener('scroll', this.onscroll);
        }
    }.bind(this);

    this.onscroll = this.onscroll.bind(this)

    window.addEventListener('scroll', this.onscroll);
}