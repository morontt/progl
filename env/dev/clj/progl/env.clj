(ns progl.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [progl.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[progl started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[progl has shut down successfully]=-"))
   :middleware wrap-dev})
