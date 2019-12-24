import SiteHome from "~/components/parts/site-home"
import SiteStatuses from "~/components/parts/site-statuses"
import ToggleTheme from "~/components/parts/toggle-theme"

export default () => {
  return (
    <header className="section is-header">
      <div className="inner is-padding-right-sm is-padding-left-md">
        <div className="box is-padding-top-safe">
          <div className="grid is-middle is-between">
            <div className="column">
              <div className="box is-flex is-bottom">
                <div className="box is-margin-right-sm">
                  <SiteHome />
                </div>
                <div className="box is-flex">
                  <SiteStatuses />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <ToggleTheme />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
