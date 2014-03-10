$(function() {
    function command(cmd, term) {
        cmd = cmd.toLowerCase();
        switch (cmd) {
            case "":
                break;
            case "help":
                term.echo(
                "Available command are:\n"+
                "ABOUT\t\t\t Display all informations about me"+"\n"+
                "SKILL\t\t\t Display self assessed skill"+"\n"+
                "TOOLS\t\t\t Some tools and framework that I use"+"\n"+
                "CONTACT\t\t   How to contact me"+"\n"+
                "CLEAR\t\t\t Clear the screen"+"\n"+
                "\n"
                );
                break;
            case "about":
                term.echo(
                "\nHi! My name is Rifki Alhuraibi\n\n"+
                "i'm a web developer from Surabaya Indonesia, with the 5+ years experience in web programming.\n"+
                "i'm a self taught web developer, world wide web never failed to impress me with its rapid growth and technological advance.\n" +
                "\n"
                );
                break;
            case "skill":
                term.echo(
                "\n"+
                "==================  " + "\t90%\t" + "PHP" + "\n"+
                "================    " + "\t80%\t" + "CSS" + "\n"+
                "=================== " + "\t95%\t" + "HTML 5" + "\n"+
                "================    " + "\t80%\t" + "Javascript/jQuery" + "\n"+
                "==========          " + "\t50%\t" + "Unix &amp; Networking" + "\n"+
                "\n"
                );
                break;
            case "tools":
                term.echo(
                "\n"+
                "Laravel\t\t " + "laravel is a very robust and expressive php framework, it gain some spotlight with the release of version 4.*. I've been using laravel since version 3.0 and never looked back." + "\n" +
                "jQuery\t\t  "  + "jQuery is definitely my choice of framework on javascript framework." + "\n" +
                "Bootstrap\t   " + "as for frontent and ui, i prefer using Twitter Bootstrap." + "\n" +
                "\n"
                );
                break;
            case "contact":
                term.echo(
                "\n"+
                "Thank You! for considering to contact me" + "\n\n" +
                "You can send your inquiry directly to my email: riefky.alhuraibi@gmail.com" + "\n"+
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