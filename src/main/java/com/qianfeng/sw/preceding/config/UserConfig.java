package com.qianfeng.sw.preceding.config;

import com.qianfeng.sw.preceding.dto.SwUserDTO;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by admin on 2018/4/11.
 */
public class UserConfig {

      public static final class  Utlity{

          public static final Integer USER_PHONE_LENGTH=11;
          public static final String USER_PHONE="@qq.com";
          public static SwUserDTO swUserDTO = new SwUserDTO();
          public static Map<String,HttpSession> map=new HashMap<String,HttpSession>();

          public static List<String> stringList = new ArrayList<>();
          public static final int COUNT = 0;

    }
}
