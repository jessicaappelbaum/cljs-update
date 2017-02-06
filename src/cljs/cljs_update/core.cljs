(ns cljs-update.core
  (:require [clojure.string :as str]
            [goog.object]
            #_[node_modules.semantic-ui-react :as semantic]
            [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]))


#_(def ^:private semantic-ui js/semanticUIReact)

#_(defn $ [kw]
  (let [c-keys (str/split (name kw) ".")]
    (apply goog.object/getValueByKeys semantic-ui c-keys)))

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to cljs-update"]
   [:> ($ :Button) {:href "/elements"} "Elements"]
   [:div [:a {:href "/about"} "go to about page"]]])

(defn about-page []
  [:div [:h2 "About cljs-update"]
   [:div [:a {:href "/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
