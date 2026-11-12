import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
const root=process.cwd(), target=path.join(root,'tmp/release-review');
if(!fs.existsSync(path.join(target,'.git'))) throw new Error('Create the review worktree first');
const excluded=new Set(['src/app/(marketing)/about/about.module.css','src/app/(marketing)/about/page.tsx','src/app/api/career/route.ts','src/lib/supabase/admin.ts']);
const changed=execFileSync('git',['-c','core.quotepath=false','diff','--name-only'],{encoding:'utf8'}).trim().split(/\r?\n/).filter(Boolean);
const added=['.github/workflows/release-validation.yml','SEO-REVIEW.md','playwright.config.ts','scripts/check-seo.mjs','scripts/wait-for-release.mjs','scripts/check-release-access.mjs','src/app/(marketing)/services/[slug]/page.tsx','src/app/admin/layout.tsx','src/app/client/layout.tsx','src/components/LocalServicePage.tsx','src/components/PlanningGuide.tsx','src/lib/enquiry-events.ts','src/lib/enquiry-handler.ts','src/lib/enquiry-server.ts','src/lib/planning-guides.ts','src/lib/services.data.ts','src/lib/use-enquiry-submit.ts','supabase/migrations/20261111110000_enquiry_idempotency.sql','tests/release/enquiry.contract.ts','tests/release/site.browser.ts','wrangler.staging.jsonc','release/README.md','release/image-review.json'];
let copied=0;
for(const file of [...changed.filter(file=>!excluded.has(file)),...added]) {
 if(file.startsWith('.env') || file.includes('..') || file.startsWith('tmp/')) throw new Error('Unexpected source path');
 const dest=path.join(target,file),source=path.join(root,file);
 fs.mkdirSync(path.dirname(dest),{recursive:true});
 if(fs.existsSync(source)) fs.copyFileSync(source,dest);
 else if(fs.existsSync(dest)) fs.unlinkSync(dest);
 copied++;
}
// Apply only SEO claim cleanup to the committed About page, retaining its baseline
// team and layout. The user's later team additions, portraits and CSS stay local.
const about='src/app/(marketing)/about/page.tsx';
let baseline=execFileSync('git',['show',`HEAD:${about}`],{encoding:'utf8'});
const current=fs.readFileSync(path.join(root,about),'utf8');
for(const [start,end] of [['export const metadata:','const aboutSchema ='],['const aboutSchema =','const breadcrumbSchema ='],['const stats =','const values =']]) {
 const a=baseline.indexOf(start),b=baseline.indexOf(end,a),c=current.indexOf(start),d=current.indexOf(end,c);
 if([a,b,c,d].some(v=>v<0)) throw new Error('About extraction failed');
 baseline=baseline.slice(0,a)+current.slice(c,d)+baseline.slice(b);
}
baseline=baseline.replaceAll('MTech in Architecture','Architecture & Design').replaceAll('Architecture · IIT Kharagpur','Architecture & Design').replaceAll('qual: "IIT Kharagpur"','qual: "Architecture & Design"')
 .replace("With a Master's in Architecture, he brings cutting-edge design thinking and structural expertise to every project",'He contributes to architectural planning and design development')
 .replace("With an academic foundation from IIT Kharagpur and professional experience spanning diverse regions of India, Sumanth's journey has been shaped by a deep understanding of context, culture, and detail.",'Sumanth contributes to design direction with an interest in context, culture, and detail.')
 .replaceAll('Book a free consultation','Request a consultation');
fs.writeFileSync(path.join(target,about),baseline);
console.log(JSON.stringify({reviewBranch:'review/seo-release-validation-20261111',copiedPaths:copied+1,excluded:[...excluded,'public/images/team/','supabase/migrations/20261029153000_form_submissions.sql'],secretsCopied:false}));
