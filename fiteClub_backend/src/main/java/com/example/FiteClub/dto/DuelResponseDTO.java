package com.example.FiteClub.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DuelResponseDTO {
    private long id;
    private String category;
    private Long card1Id;
    private String card1Category;
    private String card1Username;
    private Long card2Id;
    private String card2Category;
    private String card2Username;

    public DuelResponseDTO(long id, String category, Long card1Id, String card1Category, String card1Username, Long card2Id, String card2Category, String card2Username) {
        this.id = id;
        this.category = category;
        this.card1Id = card1Id;
        this.card1Category = card1Category;
        this.card1Username = card1Username;
        this.card2Id = card2Id;
        this.card2Category = card2Category;
        this.card2Username = card2Username;
    }

    //    public DuelResponseDTO(long id, String category, String card1Category,String card1Username, String card2Category, String card2Username) {
////    public DuelResponseDTO(long id, String category, String card1Category, String card2Category){
//        this.id = id;
//        this.category = category;
//        this.card1Category = card1Category;
//        this.card1Username = card1Username;
//        this.card2Category = card2Category;
//        this.card2Username = card2Username;
//    }
}
