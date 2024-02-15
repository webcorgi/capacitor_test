package com.example.app;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/*
* 네이티브 플러그인 정의(Java):
* Android 앱 모듈(Capacitor 프로젝트 내)에서 Plugin을 확장하는 Java 클래스를 정의합니다.
* 이 클래스 내에서는 @PluginMethod와 같은 주석을 사용하여 JavaScript에서 호출할 수 있는 메서드를 나타냅니다.
* */
@CapacitorPlugin(name = "Echo")
public class EchoPlugin extends Plugin {
    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }
}