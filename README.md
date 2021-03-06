
DFotos hemsida
===============

*Versionsnummer*: v1

Detta är koden till Datateknologsektionens fotoförenings, hemsida.

För att få inloggning(kerberos) att fungera i fixa krb5.conf såhär: http://dtek.se/wiki/Main/Kerberos.
Detta behöver endast göras server-side.

### Requirements
Installera

* node/nodejs
* gulp
* kerberos config

### Fetch & Build
```bash
$> git clone https://github.com/dtekcth/dfotose
$> cd dfotose
$> npm install
...
$> cp src/config/config.yml{.sample,}
$> vim src/config/config.yml
...
$> gulp
...
```

Besök sidan på http://localhost:4000/ . När du ändrar i koden laddar den om sig själv by default.


### REST api

DFoto har ett öppet rest-liknande api för att kunna hämta bilder och gallerier. All data returneras formaterad som json.

**notera**: alla paths prefixas med ett versionsnummer. Se versionsnummret i readme-filen.

> Exempel: /gallery => /v1/gallery



| Method | Path                           | Description                              |
| ------ | ------------------------------ | ---------------------------------------- |
| GET    | /gallery                       | list of all galleries sorted in descending order |
| GET    | /gallery/limit/:limit          | list of all galleries with a maximum limit |
| GET    | /gallery/count                 | the count of all galleries               |
| GET    | /gallery/:id                   | get the data of a specific gallery       |
| GET    | /gallery/:id/thumbnail-preview | the actual thumbnail image of a gallery  |
| GET    | /image/:galleryId              | list of all images in a specific gallery |
| GET    | /image/:id/fullSize            | the actual full-size image               |
| GET    | /image/:id/thumbnail           | the actual thumbnail image               |
| GET    | /image/:id/preview             | the preview image                        |
| GET    | /image/:id/tags                | all the tags associated with an image    |
| GET    | /image/tags/:name/search       | a list of images that contains a certain tag |

