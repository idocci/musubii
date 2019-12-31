import React from "react"
import App from "next/app"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import AppHeader from "~/components/commons/app-header"
import AppFooter from "~/components/commons/app-footer"
import AppActions from "~/components/commons/app-actions"
import LayoutDefault from "~/components/commons/layout-default"
import LayoutDocs from "~/components/commons/layout-docs"

class MyApp extends App {
  componentDidMount() {
    const userAgent = window.navigator.userAgent.toLowerCase()

    if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
      require("~/assets/scss/project-ie.scss")
    } else {
      require("~/assets/scss/project.scss")
    }

    const isLocal = localStorage.getItem("theme")
    const isDark = window.matchMedia("(prefers-color-scheme: dark)")

    if (isLocal) {
      document.body.setAttribute("data-theme", isLocal)
    } else if (isDark.matches) {
      document.body.setAttribute("data-theme", "dark")
    } else {
      document.body.setAttribute("data-theme", "light")
    }
  }
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <div className="app">
        <AppHeader />
        <AppActions checkHome={router.route === "/" ? true : false} />
        <main className="main">
          {router.route === "/" ? (
            <LayoutDefault>
              <Component {...pageProps} />
            </LayoutDefault>
          ) : (
            <LayoutDocs>
              <Component {...pageProps} />
            </LayoutDocs>
          )}
        </main>
        <AppFooter />
      </div>
    )
  }
}

export default MyApp
