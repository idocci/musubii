import Head from "next/head"

import pjt from "../../../project.json"

export default ({ meta }) => {
  return (
    <Head>
      <title key="title">
        {meta.title ? meta.title + " - " + pjt.site.title : pjt.site.title}
      </title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta
        property="format-detection"
        content="telephone=no, email=no, address=no"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        key="description"
        property="description"
        content={pjt.site.description}
      />
      <meta
        property="og:title"
        content={
          meta.title ? meta.title + " - " + pjt.site.title : pjt.site.title
        }
      />
      <meta
        property="og:description"
        content={meta.description ? meta.description : pjt.site.description}
      />
      <meta
        property="og:url"
        content={meta.path ? pjt.site.url + meta.path : pjt.site.url}
      />
      <meta
        property="og:image"
        content={pjt.site.url + "/apple-touch-icon.png"}
      />
      <meta property="og:site_name" content={pjt.site.title} />
      <meta
        property="og:type"
        content={meta.path === "/" ? "website" : "article"}
      />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:creator" content={"@" + pjt.site.twitter_id} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}
