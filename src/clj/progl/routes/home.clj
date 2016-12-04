(ns progl.routes.home
  (:require [progl.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :as response]
            [progl.db.core :as db]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html" {:topics (db/get-visible-posts)}))

(defn about-page []
  (layout/render "about.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page)))

