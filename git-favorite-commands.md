> genomen uit https://orga.cat/posts/most-useful-git-commands

# nieuwe repo initialiseren
    git init


# remote repo (kan ook cloud of ftp zijn) toevoegen aan lijst, NNN is de 'nickname'
    git remote add NNN https://github.com/LOGIN/repo


# bekijk alle remote repo's
    git remote -v


# remote repo url wijzigen
    git remote set-url NNN https://github.com/LOGIN/repo


# alle bestanden in de huidige map toevoegen om te volgen (staging)
    git add -A


# alle gevolgde bestanden committen
    git commit - m 'een commit bericht'


# verwijder alle verwijderde bestanden uit de te volgen bestanden
    git ls-files --deleted -z | xargs -0 git rm


# lokale commits uploaden naar de branch BBB van repo NNN
    git push NNN BBB


# remote repo mergen met de lokale repo
    git pull NNN BBB


# geef info weer van huidige lokale repo
    git status



# toon de huidige configuratie, gebruik de keywords om de betreffende config te wijzigen
    git config --list


# URL repo clonen naar huidige map
    git clone URL .


# lijst van commits bekijken
    git log
