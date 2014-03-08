$(function() {
    function command(cmd, term) {
        cmd = cmd.toLowerCase();
        switch (cmd) {
            case "":
                break;
            case "help":
                term.echo(
                "Available command are:\n"+
                "ABOUT\t\t Display all informations about me"+
                "\n"
                );
                break;
            case "about":
                term.echo(
                "\nHi! My name is Rifki Alhuraibi\n\n"+
                "i'm a web developer from Surabaya Indonesia"+
                "\n"
                );
                break;
            default: 
                term.error("command ["+cmd+"] not recognized");
                break;
        }
    }
    
    $("#terminal").terminal(function(cmd, term){
        command(cmd, term);
    }, {
        prompt : "[guest@localhost ~]# ",
        greetings:"Veelasky Console\n"+"Copyright (c) 2014 by Rifki Alhuraibi\n\n"+"type `help` to see all available command\n",
    });
});