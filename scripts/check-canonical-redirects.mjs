import http from 'node:http';
import assert from 'node:assert/strict';
const origin = process.env.REDIRECT_TEST_ORIGIN || 'http://127.0.0.1:8788';
const paths = ['/', '/?city=Vizag&query=a%2Fb', '/services', '/services?city=Vizag&query=a%2Fb', '/blog?tag=office&tag=home'];
function request(host,path) {
  return new Promise((resolve,reject)=>{
    const req=http.get(origin+path,{headers:{host,'x-forwarded-proto':'https'}},response=>{
      const result={host,path,status:response.statusCode,location:response.headers.location};
      response.resume();response.on('end',()=>resolve(result));
    });req.on('error',reject);req.setTimeout(15000,()=>req.destroy(new Error('Request timeout')));
  });
}
for(const path of paths) {
  const apex=await request('nestiquestudio.in',path);
  console.log(JSON.stringify(apex));
  assert.equal(apex.status,308);assert.equal(apex.location,'https://www.nestiquestudio.in'+path);
  const www=await request('www.nestiquestudio.in',path);
  console.log(JSON.stringify(www));
  assert.equal(www.status,200);assert.equal(www.location,undefined);
}
console.log('PASS: apex root/path/query redirects and canonical-www responses; no literal placeholders or self-redirects.');
