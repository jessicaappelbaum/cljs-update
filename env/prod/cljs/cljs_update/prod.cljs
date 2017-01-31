(ns cljs-update.prod
  (:require [cljs-update.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
