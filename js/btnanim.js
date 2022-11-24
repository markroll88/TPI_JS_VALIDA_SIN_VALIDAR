 n = 0;
        var colores = ['red', 'green', 'blue', 'orange', 'yellow', 'blueviolet']; 
        
        function cambiaColor() {
            n++;
            var root = document.documentElement;
            root.style.setProperty('--color', colores[n % colores.length]);
        }
