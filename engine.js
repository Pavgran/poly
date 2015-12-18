function engine(canvas){
    this.canvas = canvas
    this.gl = canvas.getContext("experimental-webgl", {antialias: true});
};

engine.prototype.resize = function(w, h){
    this.width = w;
    this.height = h;
    this.canvas.width = w;
    this.canvas.height = h;
};

