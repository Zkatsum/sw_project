package com.qianfeng.sw.preceding.dao.impl;

import com.qianfeng.sw.preceding.dao.IGenreDAO;
import com.qianfeng.sw.preceding.dto.SwGenreDTO;
import org.apache.ibatis.session.SqlSession;
import org.apache.log4j.Logger;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by asus on 2018/4/12.
 */
@Component
public class GenreDAO implements IGenreDAO  {

    private static final Logger logger = Logger.getLogger(GenreDAO.class);

    @Autowired
    private SqlSession sqlSession;

    public void testgenre(int id){
        int swGenreId = 1;
        List<SwGenreDTO> objects = sqlSession.selectList("com.qianfeng.sw.preceding.dto.SwGenreMapper.selectTest", swGenreId);
        for (SwGenreDTO s :
                objects) {
            if(logger.isInfoEnabled()){
                logger.info(s);
            }
        }

    }

    public void testUpdate(HashMap<String ,Object>  map){
        sqlSession.update("com.qianfeng.sw.preceding.dto.SwProductMapper.updateAllProduct",map);
    }

}
