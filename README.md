# xls-nodejs
Sample project to generate XLS file using Nodejs.

Installation:

1. [nodejs.org](https://nodejs.org)
2. [npmjs.com](https://www.npmjs.com) (includes node)
3. git clone https://github.com/leandroandrade/xls-nodejs/
3. cd ./xls-nodejs/
4. npm install
5. npm start
6. http://localhost:3000/xls

## Links
1. https://www.npmjs.com/package/excel4node
2. https://stackoverflow.com/questions/44369082/excel-download-is-not-working-in-mean-stack-app/44373532#44373532

## Example download using angularjs
```
$http.get('http://localhost:3000/xls', { responseType: 'arraybuffer' })
    .success(function (data, status, headers) {
        window.open(URL.createObjectURL(new Blob([data], { type: headers('Content-Type') })));
    }).error(function (data, status) {
    console.log(data);
});
```
