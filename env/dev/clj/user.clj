(ns user
  (:require [mount.core :as mount]
            progl.core))

(defn start []
  (mount/start-without #'progl.core/repl-server))

(defn stop []
  (mount/stop-except #'progl.core/repl-server))

(defn restart []
  (stop)
  (start))


