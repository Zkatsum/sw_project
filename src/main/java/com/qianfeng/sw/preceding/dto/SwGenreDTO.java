package com.qianfeng.sw.preceding.dto;

import java.io.Serializable;
import java.util.List;

/**
 * Created by asus on 2018/4/12.
 */
/**
 * 总类别DTO
 * */
public class SwGenreDTO implements Serializable {

    private static final long serialVersionUID = 2L;

    /*
    **总类别id
     */
    private int swGenreId;

    /**
    * 总类别名字
    * */
    private String swGenreName;

    private List<SwConditionDTO> swConditionDTOList;

    @Override
    public String toString() {
        return "SwGenreDTO{" +
                "swGenreId=" + swGenreId +
                ", swGenreName='" + swGenreName + '\'' +
                ", swConditionDTOList=" + swConditionDTOList +
                '}';
    }

    public List<SwConditionDTO> getSwConditionDTOList() {
        return swConditionDTOList;
    }

    public void setSwConditionDTOList(List<SwConditionDTO> swConditionDTOList) {
        this.swConditionDTOList = swConditionDTOList;
    }

    public int getSwGenreId() {
        return swGenreId;
    }

    public void setSwGenreId(int swGenreId) {
        this.swGenreId = swGenreId;
    }

    public String getSwGenreName() {
        return swGenreName;
    }

    public void setSwGenreName(String swGenreName) {
        this.swGenreName = swGenreName;
    }


}
