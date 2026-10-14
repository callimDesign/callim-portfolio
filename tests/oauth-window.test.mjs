import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
const source=readFileSync(new URL('../public/admin/oauth-window.js',import.meta.url),'utf8');
test('OAuth opens a fresh tab, preserves opener and rejects foreign endpoints',()=>{
 const calls=[];const tab={location:{},focus(){}};
 const context={URL,location:{href:'https://example.com/admin/',origin:'https://example.com'},window:{open:(...args)=>{calls.push(args);return tab;}},alert(){}};
 vm.runInNewContext(source,context);
 assert.equal(context.window.open('https://example.com/api/auth?provider=github','Netlify Authorization','width=960'),tab);
 assert.deepEqual(calls[0],['about:blank','_blank']);
 assert.equal(tab.location.href,'https://example.com/api/auth?provider=github');
 assert.throws(()=>context.window.open('https://foreign.example/api/auth','Netlify Authorization'));
 context.window.open('/other','other','width=500');assert.deepEqual(calls[1],['/other','other','width=500']);
});
test('Blocked window reports the problem without null focus error',()=>{
 let message='';const context={URL,location:{href:'https://example.com/admin/',origin:'https://example.com'},window:{open:()=>null},alert:text=>message=text};
 vm.runInNewContext(source,context);const result=context.window.open('/api/auth','Netlify Authorization');result.focus();assert.match(message,/로그인 창/);
});