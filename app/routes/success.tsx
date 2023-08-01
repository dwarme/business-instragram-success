import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PostFilters from "~/components/post-filters";
import PostGrid from "~/components/post-grid";

export function loader() {
  const posts: {
    imageSrc: string;
    link: string;
    title: string;
    subtitle: string;
  }[] = [
    {
      imageSrc:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/335872802_624322782456872_6124428669723609543_n.jpg?stp=dst-webp&_nc_cat=105&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=8O8bEvV8zXsAX-p-JNv&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfBnYsAvposmB5AVxhivglqj72wQ3UX_tz3T5WITID1jmw&oe=64E2BE0D",
      link: "https://business.instagram.com/success/2-reserved/",
      title: "Reserved",
      subtitle: "Tiny tags with big results",
    },
    {
      imageSrc:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/345625460_706131671269060_6579463883421624370_n.jpg?stp=dst-webp&_nc_cat=111&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=vBRwgdFzMLsAX-hxPlx&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfA_TwCX8SomJSibbpGcj5KIEp6OKLX93r6VuUfj7EWz1w&oe=64E2DD42",
      link: "/success/hm/",
      title: "H&M",
      subtitle: "Real results with virtual creators",
    },
    {
      imageSrc:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/346980574_1293681061356030_2096637473496336905_n.jpg?stp=dst-webp&_nc_cat=102&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=aBxF16_QIWgAX_RO9mc&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfDXW1awasGeodeWPzpvqvmhlv-fYTRnaMSJrEzJ_hKKbQ&oe=64E2C882",
      link: "/success/2-mcdonalds-hong-kong/",
      title: "McDonald’s Hong Kong",
      subtitle: "New menu item sales with an Instagram experience",
    },
    {
      imageSrc:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/346885632_201908259383833_4982623137031872995_n.jpg?stp=dst-webp&_nc_cat=103&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=Al6ijfQiEIkAX9LhoTR&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfBd1ho-MZRd_HL_kUjaqdN22Xsum4z7ZIKOXo7VLTTr5w&oe=64E2CF23",
      link: "/success/talabat/",
      title: "talabat",
      subtitle: "Augmented reality delivers during Ramadan",
    },
    {
      imageSrc:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/342197629_924476752128342_2703844299968566172_n.jpg?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=BOSb6WBJE7kAX8D_dRR&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfDqJ_VPsZGOOSCj-1NfvorQVig30nwYeAbNH_Yw4DiK0A&oe=64E2D1AF",
      link: "/success/carolina-lifestyle/",
      title: "Carolina Lifestyle",
      subtitle: "Shopping fashionably",
    },
    {
      imageSrc:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/341032546_1267451537506432_6547667393140554549_n.jpg?stp=dst-webp&_nc_cat=108&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=0NOm2u3lRUcAX8eZlt-&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfAw_Ioh0DwRmkU0-l649L7vtqtfSYqG8GeprpCPb_diWQ&oe=64E2CD81",
      link: "/success/universal-studios-home-entertainment-uk/",
      title: "Universal Studios Home Entertainment UK",
      subtitle: "Out of this world",
    },
    {
      imageSrc:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/336182400_1208055613246376_293556702394738417_n.jpg?stp=dst-webp&_nc_cat=106&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=N2vCfm-4w4QAX9tJqeF&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfD3mtVPAwCRn8TNsZPNcvSmPUOeybrmVeuI2AAer80u2Q&oe=64E2B183",
      link: "/success/ikea-sweden/",
      title: "IKEA Sweden",
      subtitle: "Turning up the volume",
    },
    {
      imageSrc:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/319982623_675040557457881_5028249130797730131_n.jpg?stp=dst-webp&_nc_cat=110&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=ESLjxb0aMHUAX8KcLFM&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfDhueMgkq612gVUCpU7z1vCCre5MVShmcYZOfWotgEb6Q&oe=64E2C4D7",
      link: "/success/pizza-hut-uae/",
      title: "Pizza Hut UAE",
      subtitle: "Branded content for a bigger pizza",
    },
    {
      imageSrc:
        "https://scontent.fmxp6-1.fna.fbcdn.net/v/t39.2365-6/335511757_746853350209465_4691570495067875838_n.jpg?stp=dst-webp&_nc_cat=101&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=2cE9HDaUalEAX9OwY7D&_nc_ht=scontent.fmxp6-1.fna&oh=00_AfAVWTAz78kOIpLx3R8AgGilHEKqWWM5pzm0tJG_USWTZQ&oe=64E2DE76",
      link: "/success/yuedpao/",
      title: "Yuedpao",
      subtitle: "Tailored targeting",
    },
  ];

  return json({ posts });
}

export default function SuccessRoute() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main role="main">
      <div className="_2noi">
        <div
          className="_599_ _3rap"
          style={{background: "linear-gradient(7deg, #ffd521, #f50000 40%, #b900b4)"}}
        >
          <div className="_5lia">
            <div className="_5k62 _5nd9 _3rn7">
              <div className="_vu5 _4ok7 _3rn7">
                <h1 style={{color: "white"}}>Case studies</h1>
              </div>
              <p
                className="_5tdb _4yc6"
                style={{color: "white"}}
                data-ms='{"creative":"content"}'
              >
                From major brands to local, family-run shops, businesses around
                the world are driving proven results with Instagram.
              </p>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <div className="_2srm _22s6 _1fmy">
            <div className="_22s6 _2an6 _2an7">
              <div className="_22s6 _1fwj _2srm _2an8">
                <div className="_z7y _4ok7">
                  See how other advertisers are inspiring action.
                </div>
                <p className="_5tdb _4yc6" data-ms='{"creative":"content"}'>
                  Get the inside scoop on how businesses around the world use
                  Instagram ads to get real business results – from brand
                  awareness to increased sales.
                </p>
              </div>
              <PostFilters />
              <PostGrid posts={posts} />
            </div>
          </div>
        </div>
        ;
      </div>
    </main>
  );
}
