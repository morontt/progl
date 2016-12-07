(ns progl.routes.home
  (:require [progl.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :as response]
            [progl.db.core :as db]
            [clojure.java.io :as io]))

(defn home-page [page]
  (layout/render "home.html" {:topics (db/get-visible-posts {:offset (* 10 (- page 1))})}))

(defn about-page []
  (layout/render "about.html"))

(defroutes home-routes
  (GET "/" [] (home-page 1))
  (GET ["/:page" :page #"\d+"] [page] (home-page (Integer/parseInt page)))
  (GET "/about" [] (about-page)))
