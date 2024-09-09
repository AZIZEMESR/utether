import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { url } from 'inspector';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles



  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"نرخ تتر"} style={{
        minHeight: 5, margin: 20, width: "calc(98% - 20px)",
        backgroundColor: "oklch(0 0 0)", fontSize: "12pt",
        backgroundImage: `url(${"https://i.ytimg.com/vi/r_RxKMtKJas/maxresdefault.jpg"})`,
        backgroundSize:"cover"
      }}>
        <br-xxx />
        <div>
          <div style={{
            width: "calc(95% - 0px)", height: 50, backgroundColor: "lab(36.54 63.34 -94.08 / 0.40)", marginTop: "40pt",
            borderRadius: 5, textAlign: "center", marginRight: "17pt" , color: "lightgray"
          }}>
            <br-x />
            <br-xx />
            <img src="https://tether.to/images/logoCircle.svg" style={{ width: "1.5rem", float: "left", marginLeft: "10pt" }} />
            <img
              src="https://tether.to/images/logoGreen.svg"
              style={{ width: "4rem", float: 'right', marginRight: "45px", marginTop: "5px" }}
            />
            <p style={{ textAlign: "center", marginLeft: "80pt", fontSize: "12pt" }}> نرخ کنونی  : {(Number(props.p.price) as number).toLocaleString("fa-ir")} </p>


          </div>

          <br-xxx />

          <div style={{
            fontWeight: "bold", width: "95%", height: 50, backgroundColor: "lab(36.54 63.34 -94.08 / 0.45)",
            borderRadius: 5, textAlign: "center", marginRight: "17pt", color: "lightgray"
          }}>
            <br-x />
            <br-xx />
            <img src="https://tether.to/images/logoCircle.svg" style={{ width: "1.5rem", float: "left", marginLeft: "10pt" }} />
            <img
              src="https://tether.to/images/logoGreen.svg"
              style={{ width: "4rem", float: 'right', marginRight: "45px", marginTop: "5px" }}
            />
            <p style={{ textAlign: "center", marginLeft: "68pt", fontSize: "12pt" }}> کمترین نرخ روز اخیر : {(Number(props.p.last24hMin) as number).toLocaleString("fa-ir")} </p>
          </div>

          <br-xxx />

          <div style={{
            fontWeight: "bold", width: "95%", height: 50, backgroundColor: "lab(36.54 63.34 -94.08 / 0.50)",
            borderRadius: 5, textAlign: "center", marginRight: "17pt", color: "lightgray"
          }}>
            <br-x />
            <br-xx />
            <img src="https://tether.to/images/logoCircle.svg" style={{ width: "1.5rem", float: "left", marginLeft: "10pt" }} />
            <img
              src="https://tether.to/images/logoGreen.svg"
              style={{ width: "4rem", float: 'right', marginRight: "45px", marginTop: "5px" }}
            />
            <p style={{ textAlign: "center", marginRight: "8pt", marginLeft: "60pt", fontSize: "12pt" }}> بیشترین نرخ روز اخیر : {(Number(props.p.last24hMax) as number).toLocaleString("fa-ir")} </p>
          </div>

          <br-xxx />

          <div style={{
            fontWeight: "bold", width: "95%", height: 50, backgroundColor: "lab(36.54 63.34 -94.08 / 0.55)",
            borderRadius: 5, textAlign: "center", marginRight: "17pt", color: "lightgray"
          }}>
            <br-x />
            <br-xx />
            <img src="https://tether.to/images/logoCircle.svg" style={{ width: "1.5rem", float: "left", marginLeft: "10pt" }} />
            <img
              src="https://tether.to/images/logoGreen.svg"
              style={{ width: "4rem", float: 'right', marginRight: "45px", marginTop: "5px" }}
            />
            <p style={{ textAlign: "center", marginRight: "75pt", marginLeft: "60pt", fontSize: "12pt"}}> نوسانات ۲۴ ساعت اخیر : {"٪" + (Number(props.p.diff24d) as number).toLocaleString("fa-ir")} </p>
          </div>

          <br-xxx />


          <div style={{
            fontWeight: "bold", width: "95%", height: 50, backgroundColor: "lab(36.54 63.34 -94.08 / 0.50)",
            borderRadius: 5, textAlign: "center", marginRight: "17pt", color: "lightgray"
          }}>
            <br-x />
            <br-xx />
            <img src="https://tether.to/images/logoCircle.svg" style={{ width: "1.5rem", float: "left", marginLeft: "10pt" }} />
            <img
              src="https://tether.to/images/logoGreen.svg"
              style={{ width: "4rem", float: 'right', marginRight: "45px", marginTop: "5px" }}
            />
            <p style={{ textAlign: "center", marginLeft: "60pt", fontSize: "12pt" }}> کمترین نرخ ماه اخیر : {(Number(props.p.last30dMin) as number).toLocaleString("fa-ir")} </p>
          </div>

          <br-xxx />

          <div style={{
            fontWeight: "bold", width: "95%", height: 50, backgroundColor: "lab(36.54 63.34 -94.08 / 0.45)",
            borderRadius: 5, textAlign: "center", marginRight: "17pt", color: "lightgray"
          }}>
            <br-x />
            <br-xx />
            <img src="https://tether.to/images/logoCircle.svg" style={{ width: "1.5rem", float: "left", marginLeft: "10pt" }} />
            <img
              src="https://tether.to/images/logoGreen.svg"
              style={{ width: "4rem", float: 'right', marginRight: "45px", marginTop: "5px" }}
            />
            <p style={{ textAlign: "center", marginRight: "70pt", marginLeft: "60pt", fontSize: "12pt"}}> بیشترین نرخ ماه اخیر : {(Number(props.p.last30dMax) as number).toLocaleString("fa-ir")} </p>
          </div>

          <br-xxx />

          <div style={{
            fontWeight: "bold", width: "95%", height: 50, backgroundColor: "lab(36.54 63.34 -94.08 / 0.40)",
            borderRadius: 5, textAlign: "center", marginRight: "17pt", color: "lightgray"
          }}>
            <br-x />
            <br-xx />
            <img src="https://tether.to/images/logoCircle.svg" style={{ width: "1.5rem", float: "left", marginLeft: "10pt" }} />
            <img
              src="https://tether.to/images/logoGreen.svg"
              style={{ width: "4rem", float: 'right', marginRight: "45px", marginTop: "5px" }}
            />
            <p style={{ textAlign: "center", marginLeft: "65pt", fontSize: "12pt" }}>  نوسانات ماه اخیر : {"٪" + (Number(props.p.diff30d) as number).toLocaleString("fa-ir")} </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://iili.io/daBmKmJ.png"
              alt="bugology group"
              style={{ width: "10rem", padding: "1rem", marginTop: "10px" }}
            />
          </div>
        </div>
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await fetch("https://api.tetherland.com/currencies")
  let data = await res.json()
  let p = data.data.currencies.USDT
  console.log("GHEYMATTTTTT:", p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}