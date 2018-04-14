package com.qianfeng.sw.preceding.listener;

import com.qianfeng.sw.preceding.dto.SwUserDTO;


import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.util.HashMap;
import java.util.Map;

/**Author:wanggaiwei
 * Created by admin on 2018/4/11.
 */
public class SessionLisener implements HttpSessionListener {
    public static  SwUserDTO swUserDTO = new SwUserDTO();
    public static Map<SwUserDTO,HttpSession> map=new HashMap<SwUserDTO,HttpSession>();
    @Override
    public void sessionCreated(HttpSessionEvent httpSessionEvent) {

    }

    @Override
    public void sessionDestroyed(HttpSessionEvent httpSessionEvent) {
        HttpSession session = httpSessionEvent.getSession();
        delSession(session);
    }

     public static synchronized void delSession(HttpSession session){

          if(session!=null){
              /**
               * 前面没有删除成功再进行一次删除
               */
              if(session.getAttribute("users")!=null){
                   SwUserDTO swUserDTO= (SwUserDTO) session.getAttribute("users");
                   SessionLisener.map.remove(swUserDTO.getUserPhone());
              }
          }

     }
}
