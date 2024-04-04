
## GitHub Actions

GitHub Actions mahdollistaa erilaisten toimintojen automatisoinnin GitHub-repositoriossa. GitHub Actionsin avulla esimerkiksi tämä Jekyll-sivusto rakennetaan uudelleen ja julkaistaan automaattisesti aina, kun julkaistavaksi valitun haaran sisältö päivittyy. Ennen sivuston julkaisemista voidaan GitHub Actionsin avulla suorittaa myös esimerkiksi automaattisia testejä. Erilaisille automatisoiduille toiminnoille voidaan asettaa myös ehtoja, milloin ja/tai missä tilanteessa niitä suoritetaan.

## CI/CD-putkisto

CI/CD *(Continuous Integration / Continuous Deployment)* tarkoittaa web-sovelluksen jatkuvaa kehittämistä, testausta ja automaattista julkaisua. 
Kehittämisessä hyödynnetään erilaisia alustoja (esim. GitHub, GitLab), jotka tarjoavat Git-versionhallinnan lisäksi muitakin työkaluja, kuten GitLab CI/CD tai edellä mainittu GitHub Actions. Vastaavia jatkuvan integroinnin työkaluja on muitakin, esim. Jenkins tai TravisCI.
Testauksen automatisoinnissa voidaan hyödyntää erilaisia testikehyksiä ja -työkaluja, esim. Jest, JUnit tai Pytest yksikkö- ja integraatiotestaukseen sekä Selenium tai Robot Framework end-to-end testaukseen.
Julkaisussa voidaan käyttää apuna esim. Dockeria, joka mahdollistaa sovelluksen ja sen riippuvuuksien paketoinnin. Docker-konttien hallintaan ja skaalaukseen taas sopivat esim. Kubernetes tai Docker Swarm.
Myös sovellusympäristön konfigurointi voidaan automatisoida (esim. Ansible, Chef tai Puppet), mutta sovelluksen julkaisuun voidaan käyttää myös erilaisia pilvipalveluita, kuten Netlify tai Heroku.


